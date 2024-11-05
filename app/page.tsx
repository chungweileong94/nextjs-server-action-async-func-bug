import { problemAction } from "./_actions";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <form action={problemAction.bind({ name: "test" })}>
      <button type="submit">Submit</button>
    </form>
  );
}
