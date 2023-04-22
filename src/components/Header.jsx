export default function Header() {
  return (
    <div class="flex justify-end items-center w-4/5 font-medium mt-3">
      <ul class="flex gap-7 text-lg">
        <li>
          <span class="font-light">/\/ </span>
          <a href="#about">about</a>
        </li>
        <li>
          <span class="font-light">/\/ </span>
          <a href="#">projects</a>
        </li>
        <li>
          <span class="font-light">/\/ </span>
          <a href="#" class="underline underline-offset-4">resume</a>
        </li>
      </ul>
    </div>
  );
}
