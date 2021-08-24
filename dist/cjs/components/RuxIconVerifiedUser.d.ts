import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVerifiedUserProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVerifiedUser["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVerifiedUser["size"];
}
interface RuxIconVerifiedUserEvents {
}
interface RuxIconVerifiedUserSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVerifiedUser extends SvelteComponent {
    $$prop_def: RuxIconVerifiedUserProps;
    $$events_def: RuxIconVerifiedUserEvents;
    $$slot_def: RuxIconVerifiedUserSlots;
    $on<K extends keyof RuxIconVerifiedUserEvents>(type: K, callback: (e: RuxIconVerifiedUserEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVerifiedUserProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVerifiedUserElement | undefined;
}
export default RuxIconVerifiedUser;
