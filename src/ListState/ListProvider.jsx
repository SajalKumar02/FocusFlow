import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { ToastContext } from "../Toast/ToastProvider";

const ListContext = createContext();

const initialListState = [
  {
    id: 1,
    title: "Personal",
  },
  {
    id: 2,
    title: "Work",
  },
];

const LOCAL_STORAGE_KEY = "lists";

const ListProvider = ({ children }) => {
  const { showToast } = useContext(ToastContext);

  const [lists, setLists] = useState(() => {
    // Try to load from localStorage first
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      return data ? JSON.parse(data) : initialListState;
    } catch {
      return initialListState;
    }
  });

  // Persist lists to localStorage when lists change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists));
    } catch (e) {
      console.error("Failed to save lists to localStorage:", e);
      showToast("danger", "Failed to save lists");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lists]); // omit showToast from deps (it's stable from context)

  // fetch/restore lists from localStorage
  const getListFromLocalStorage = () => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (data) {
        setLists(JSON.parse(data));
      }
    } catch (e) {
      console.error("Failed to retrieve lists from localStorage:", e);
    }
  };

  // helpers for purity
  const canAddMoreLists = lists.length < 4;

  const addList = (newList) => {
    if (!canAddMoreLists) {
      showToast("warning", "You can have a maximum of 4 lists.");
      return;
    }

    // Find the next available unique positive integer id (lowest gap)
    const usedIds = new Set(
      lists
        .map((l) =>
          typeof l.id === "number" ? l.id : parseInt(l.id, 10) || 0,
        )
        .filter((id) => id > 0),
    );
    let id = 1;
    while (usedIds.has(id)) {
      id += 1;
    }

    setLists((prev) => [...prev, { ...newList, id }]);
    showToast("success", "List added");
  };

  const removeList = (id) => {
    setLists((prev) => prev.filter((list) => list.id !== id));
    showToast("danger", "List deleted");
  };

  const renameList = (id, newTitle) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === id ? { ...list, title: newTitle } : list,
      ),
    );
    showToast("success", "List updated");
  };

  return (
    <ListContext.Provider
      value={{
        lists,
        addList,
        removeList,
        renameList,
        getListFromLocalStorage,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export { ListContext };
export default ListProvider;
