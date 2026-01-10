import Image from 'next/image';
import location from '../../../public/images/location.png';
import mail from '../../../public/images/mail.png';
import phone from '../../../public/images/phone.png';
import './footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center p-4 bg">
        <aside>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center text-center md:w-2xl md:mx-auto py-10">
            <div>
              <Image
                className="w-15 mx-auto rounded-full p-4 bg-white mb-3"
                src={location}
                alt="address"
              />
              <h6 className="footer-title">Address</h6>
              <address className="link link-hover">
                <span>Manikganj,Dhaka</span>
              </address>
            </div>
            <div>
              <Image
                className="w-15 mx-auto rounded-full p-4 bg-white mb-3"
                src={phone}
                alt="phone"
              />
              <h6 className="footer-title">Phone</h6>
              <p>01628860956</p>
              <p>01998304128</p>
            </div>
            <div className="col-span-2 md:col-span-1 mt-5 md:mt-0">
              <Image
                className="w-15 mx-auto rounded-full p-4 bg-white mb-3"
                src={mail}
                alt="mail"
              />
              <h6 className="footer-title">Email</h6>
              <a className="link link-hover">abdullahalmuhammad6@gmail.com</a>
            </div>
          </div>
        </aside>
        <p>
          Copyright © {new Date().getFullYear()} Md Abdullah | Designed & Built with ❤️ using React
          & Next.js
        </p>
      </footer>
    </>
  );
}
