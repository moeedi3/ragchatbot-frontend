"use client";

import { Loader2 } from "lucide-react";
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

    open: boolean;

    onOpenChange: (open: boolean) => void;

    isPending?: boolean;

}

export default function ConfirmDialog({

    trigger,

    title,

    description,

    onConfirm,

    open,

    onOpenChange,

    isPending = false,

}: ConfirmDialogProps) {

    return (

        <AlertDialog open={open} onOpenChange={onOpenChange}>

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
                        disabled={isPending}
                    >

                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                                Deleting...
                            </>
                        ) : (
                            "Delete"
                        )}

                    </AlertDialogAction>

                </AlertDialogFooter>

            </AlertDialogContent>

        </AlertDialog>

    );

}