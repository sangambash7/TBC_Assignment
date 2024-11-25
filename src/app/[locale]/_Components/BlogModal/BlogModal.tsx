import './BlogModal.css';

interface BlogModalProps {
  isOpen: Boolean;
  onClose: () => void;
  title: string;
  body: string;
  setTitle: (title: string) => void;
  setBody: (body: string) => void;
  onSubmit: () => void;
  action: string;
}

const BlogModal = ({
  isOpen,
  onClose,
  title,
  body,
  setTitle,
  setBody,
  onSubmit,
  action,
}: BlogModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{action === 'create' ? 'Create New Blog' : 'Edit Blog Post'}</h2>
        <div className="post-content">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button onClick={onSubmit}>
          {action === 'create' ? 'Add Blog' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default BlogModal;
