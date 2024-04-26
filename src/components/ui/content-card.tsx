import { twMerge } from "tailwind-merge";

type CardContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContainer: React.FC<CardContainerProps> = ({
  className,
  children,
  ...props
}) => {
  const baseClasses: string = "rounded-xl border bg-white shadow-sm";

  const mergedClasses: string = twMerge([baseClasses, className]);
  return (
    <div className="w-full max-w-xs" {...props}>
      <div className={mergedClasses}>{children}</div>
    </div>
  );
};

export const ContentCard = ({
  header,
  footer,
  title,
  subtitle,
  plaintext,
  link,
  children,
}: {
  header?: string;
  footer?: string;
  title?: string;
  subtitle?: string;
  plaintext?: string;
  link?: {
    url: string;
    text: string;
  };
  children?: React.ReactNode;
}) => {
  return (
    <CardContainer>
      {header && (
        <div className="px-4 py-3 bg-gray-100 border-b rounded-t-xl sm:px-5 md:py-4">
          <p className="mt-1 text-sm text-gray-500">{header}</p>
        </div>
      )}
      <div className="flex flex-col p-4 xl:h-72 md:p-5">
        {title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
        {subtitle && (
          <p className="mt-1 text-xs font-medium text-gray-500 uppercase">
            {subtitle}
          </p>
        )}
        {plaintext && <p className="mt-2 text-gray-800">{plaintext}</p>}
        {children}
        {link && (
          <a
            href={link.url}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#4078c8] hover:text-[#4078c8]"
          >
            {link.text}
          </a>
        )}
      </div>
      {footer && (
        <div className="px-4 py-3 bg-gray-100 border-t rounded-b-xl sm:px-5 md:py-4">
          <p className="mt-1 text-sm text-gray-500">{footer}</p>
        </div>
      )}
    </CardContainer>
  );
};
export const BlockLinkCard = ({
  url,
  text,
  children,
}: {
  url?: string;
  text?: string;
  children: React.ReactNode;
}) => {
  const linkClasses: string = "flex flex-col items-center p-6 sm:p-10";

  return (
    <CardContainer className="text-gray-800 transition-colors hover:bg-gray-200/50">
      <a href={url || "#"} className={linkClasses} target="_blank">
        {children}
        {text && <p className="mt-2 font-medium">{text}</p>}
      </a>
    </CardContainer>
  );
};
