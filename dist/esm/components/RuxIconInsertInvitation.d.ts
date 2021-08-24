import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInsertInvitationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInsertInvitation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInsertInvitation["size"];
}
interface RuxIconInsertInvitationEvents {
}
interface RuxIconInsertInvitationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInsertInvitation extends SvelteComponent {
    $$prop_def: RuxIconInsertInvitationProps;
    $$events_def: RuxIconInsertInvitationEvents;
    $$slot_def: RuxIconInsertInvitationSlots;
    $on<K extends keyof RuxIconInsertInvitationEvents>(type: K, callback: (e: RuxIconInsertInvitationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInsertInvitationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInsertInvitationElement | undefined;
}
export default RuxIconInsertInvitation;
