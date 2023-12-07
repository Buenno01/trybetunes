import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col">
      Page not found
      <Link className="text-sky-400" to="/">Let&apos;s get back to the main page?</Link>
    </div>
  );
}

export default NotFound;
