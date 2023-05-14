import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <section className="py-1" style={{ height : 350, marginTop : 80  }}>
      <div className="container px-4 px-lg-5 my-4 mt-5">
        <div className="text-center">
          <h2>Nothing to see here!</h2>
          <p>
            <Link to="/">Go to the home page</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export { NoMatch }