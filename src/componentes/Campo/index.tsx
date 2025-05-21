import "./Campo.css";

interface CampoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  type?: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
}

const Campo = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}: CampoProps) => {
  const placeholderMod = `${placeholder}...`;

  const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderMod}
        value={valor}
      ></input>
    </div>
  );
};

export default Campo;
