export default function Button({ buttonText, link, target, className = "" }) {
  return (
    <a
      href={link}
      target={target}
      className={`md:p-3 p-4 md:w-fit w-full mt-2 rounded-xl text-center bg-accent font-[UbuntuMono] ${className}`}
    >
      {buttonText}
    </a>
  );
}
