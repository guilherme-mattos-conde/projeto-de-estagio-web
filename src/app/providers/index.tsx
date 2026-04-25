import { ThemeProviderApp } from "./theme-provider";
import { ModalProvider } from "@/shared/components/ModalProvider";

type Props = {
    children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
    return (
        <ThemeProviderApp>
            <ModalProvider>{children}</ModalProvider>
        </ThemeProviderApp>
    );
};
