import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCardMembershipProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCardMembership["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCardMembership["size"];
}
interface RuxIconCardMembershipEvents {
}
interface RuxIconCardMembershipSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCardMembership extends SvelteComponent {
    $$prop_def: RuxIconCardMembershipProps;
    $$events_def: RuxIconCardMembershipEvents;
    $$slot_def: RuxIconCardMembershipSlots;
    $on<K extends keyof RuxIconCardMembershipEvents>(type: K, callback: (e: RuxIconCardMembershipEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCardMembershipProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCardMembershipElement | undefined;
}
export default RuxIconCardMembership;
