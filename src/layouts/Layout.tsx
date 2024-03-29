import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Spinner } from "@/components/shared/Spinner/Spinner";
import { isLoadingAtom } from "@/hooks/recoil/atoms/loading";
import { useRecoilValue } from "recoil";
import { Alert } from "@/components/shared/Allert/Alert";
import { PageRouter } from "@/components/PageRouter/PageRouter";
import { db } from "@/lib/firebase-config";
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';
import styles from './Layout.module.scss';

type Props = {
    children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const isLoading = useRecoilValue(isLoadingAtom);
    const { pathname } = router;
    const { data: session, status } = useSession();

    return (
            <div className={styles.layout}>
                <PageRouter>
                    {children}
                    {isLoading && (
                        <Spinner />
                    )}
                    <Alert />
                </PageRouter>
            </div>
    )
}