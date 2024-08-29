import s from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={s.error}>Something went wrong. Please reload the page.</p>
  );
};

export default ErrorMessage;
