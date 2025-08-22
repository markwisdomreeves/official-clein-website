'use client';

import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { HiLink, HiCheck } from 'react-icons/hi';

export default function ShareButtons({ post, lang, dict }) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = `https://clein.it/${lang}/blog/${post.slug}`;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {dict?.blog?.post?.shareTitle || "Share this article"}
      </h3>
      <div className="flex gap-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a
          href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          aria-label="Share on X (Twitter)"
        >
          <FaXTwitter className="w-5 h-5" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${post.title}\n\n${shareUrl}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
        <button
          onClick={copyToClipboard}
          className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          aria-label="Copy link"
          title={copied ? "Link copied!" : "Copy link"}
        >
          {copied ? (
            <HiCheck className="w-5 h-5 text-green-600" />
          ) : (
            <HiLink className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}