import './footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center p-4">
        <p>
          Copyright © {new Date().getFullYear()} Md Abdullah | Designed & Built with ❤️ using React
          & Next.js
        </p>
      </footer>
    </>
  );
}
