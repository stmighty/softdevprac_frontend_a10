/*
import { useEffect, useState } from "react";
export default function useWindowListener(eventType:string, listener:EventListener) {
    useEffect(() => {
        window.addEventListener(eventType, listener)

        return () => {
            window.removeEventListener(eventType, listener)
        }
    },[])
}
*/

import { useEffect } from "react";

export default function useWindowListener(eventType: string, listener: EventListener) {
    useEffect(() => {
        window.addEventListener(eventType, listener);

        // Cleanup to remove the listener when the component is unmounted or event changes
        return () => {
            window.removeEventListener(eventType, listener);
        };
    }, [eventType, listener]); // Add dependencies
}
