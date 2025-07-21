import { AuthProvider } from '@/context/auth';
import Routes from '@/routes';
import dayjs from 'dayjs';


export default function App() {
  dayjs.locale("pt-br")

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

