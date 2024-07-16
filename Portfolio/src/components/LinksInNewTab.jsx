function LinkInNewTab({ url, text }) {
    
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default LinkInNewTab;
