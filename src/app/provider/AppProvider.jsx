import { TaskProvider } from '../../feature/task';
import { ThemeProvider } from '../../feature/theme';
import { ToastProvider, ToastContainer } from '../../feature/toast';

export const AppProviders = ({ children }) => {
  return (
    <ToastProvider>
      <ThemeProvider>
        <TaskProvider>{children}</TaskProvider>
        <ToastContainer />
      </ThemeProvider>
    </ToastProvider>
  );
};
