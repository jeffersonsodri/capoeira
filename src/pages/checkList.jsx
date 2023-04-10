import Checklist from "../components/CheckList";

export default function Home() {
  return (
    <div>
      <h1>Checklist de informações</h1>
      <p>Clique em cada item para marcar como concluído:</p>
      <Checklist />
    </div>
  );
}
