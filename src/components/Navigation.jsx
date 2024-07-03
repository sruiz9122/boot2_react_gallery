import { Link } from "react-router-dom"
import { Programing1 } from './Programing1'
import { Programing2 } from "./Programing2"
import { Programing3 } from "./Programing3"
import { Programing4 } from "./Programing4"
import { Programing5 } from "./Programing5"
import { Programing6 } from "./Programing6"
import { Programing7 } from "./Programing7"

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
      <Link to="/programing1" className="links">
        <figure className="image-size">
          <Programing1 />
          <figcaption>Programming 1</figcaption>
        </figure>
      </Link>
      <Link to="/programing2" className="links">
        <figure className="image-size">
          <Programing2 />
          <figcaption>Programming 2</figcaption>
        </figure>
      </Link>
      <Link to="/programing3" className="links">
        <figure className="image-size">
          <Programing3 />
          <figcaption>Programming 3</figcaption>
        </figure>
      </Link>
      <Link to="/programing4" className="links">
        <figure className="image-size">
          <Programing4 />
          <figcaption>Programming 4</figcaption>
        </figure>
      </Link>
      <Link to="/programing5" className="links">
        <figure className="image-size">
          <Programing5 />
          <figcaption>Programming 5</figcaption>
        </figure>
      </Link>
      <Link to="/programing6" className="links">
        <figure className="image-size">
          <Programing6 />
          <figcaption>Programming 6</figcaption>
        </figure>
      </Link>
      <Link to="/programing7" className="links">
        <figure className="image-size">
          <Programing7 />
          <figcaption>Programming 7</figcaption>
        </figure>
      </Link>
    </div>
  )
}
