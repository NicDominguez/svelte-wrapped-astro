import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxModalProps {
    /** Shows and hides modal */
    open?: Components.RuxModal["open"];
    /** Modal body message */
    modalMessage?: Components.RuxModal["modalMessage"];
    /** Modal header title */
    modalTitle?: Components.RuxModal["modalTitle"];
    /** Text for confirmation button */
    confirmText?: Components.RuxModal["confirmText"];
    /** Text for close button */
    denyText?: Components.RuxModal["denyText"];
}
interface RuxModalEvents {
    /** Event that is fired when modal closes */
    "rux-modal-closed": Parameters<JSX.RuxModal["onRux-modal-closed"]>[0];
}
interface RuxModalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxModal extends SvelteComponent {
    $$prop_def: RuxModalProps;
    $$events_def: RuxModalEvents;
    $$slot_def: RuxModalSlots;
    $on<K extends keyof RuxModalEvents>(type: K, callback: (e: RuxModalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxModalProps>): void;
    constructor(options: any);
    get open(): any;
    set open(open: any);
    get modalMessage(): any;
    set modalMessage(modalMessage: any);
    get modalTitle(): any;
    set modalTitle(modalTitle: any);
    get confirmText(): any;
    set confirmText(confirmText: any);
    get denyText(): any;
    set denyText(denyText: any);
    get getWebComponent(): HTMLRuxModalElement | undefined;
}
export default RuxModal;
