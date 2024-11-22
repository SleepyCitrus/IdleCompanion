import Hyperlink from "@/components/commons/Hyperlink";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <p className="font-bold">
        We couldn't find the page you were looking for. This is either
        because:
      </p>
      <p>
        There is an error in the URL. Please check the URL and try
        again.
      </p>
      <p>The page you are looking for has been moved or deleted.</p>
      <p className="pt-4">
        You can <Hyperlink href="/" text="return to the homepage" /> or
        navigate to another resouce using the navigation menu.
      </p>
    </div>
  );
}
