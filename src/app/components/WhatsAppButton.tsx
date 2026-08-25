'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../constants/contact';

export default function WhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]"
    >
      <FaWhatsapp />
    </Link>
  );
}
