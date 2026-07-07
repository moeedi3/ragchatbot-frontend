"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmDialogProps {

    trigger: React.ReactElement;

    title: string;

    description: string;

    onConfirm: () => void;

}

export default function ConfirmDialog({

    trigger,

    title,

    description,

    onConfirm,

}: ConfirmDialogProps) {

    return (

        <AlertDialog>

            <AlertDialogTrigger render={trigger} />

            <AlertDialogContent>

                <AlertDialogHeader>

                    <AlertDialogTitle>

                        {title}

                    </AlertDialogTitle>

                    <AlertDialogDescription>

                        {description}

                    </AlertDialogDescription>

                </AlertDialogHeader>

                <AlertDialogFooter>

                    <AlertDialogCancel>

                        Cancel

                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={onConfirm}
                    >

                        Delete

                    </AlertDialogAction>

                </AlertDialogFooter>

            </AlertDialogContent>

        </AlertDialog>

    );

}