interface ShowProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function Button({ show, setShow }: ShowProps) {
  return (
    <>
      <button onClick={() => setShow(!show)} aria-pressed={show}>
        {show === true ? "Hide List" : "Show List"}
      </button>
    </>
  );
}
