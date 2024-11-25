import { Link } from '../../../i18n/routing';

export default function LangToggler() {
  return (
    <div>
      <button>
        <Link href="/" locale="en">
          English
        </Link>
      </button>
      <button>
        <Link href="/" locale="ge">
          Gergian
        </Link>
      </button>
    </div>
  );
}
