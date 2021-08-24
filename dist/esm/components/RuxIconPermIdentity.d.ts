import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPermIdentityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPermIdentity["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPermIdentity["size"];
}
interface RuxIconPermIdentityEvents {
}
interface RuxIconPermIdentitySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPermIdentity extends SvelteComponent {
    $$prop_def: RuxIconPermIdentityProps;
    $$events_def: RuxIconPermIdentityEvents;
    $$slot_def: RuxIconPermIdentitySlots;
    $on<K extends keyof RuxIconPermIdentityEvents>(type: K, callback: (e: RuxIconPermIdentityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPermIdentityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPermIdentityElement | undefined;
}
export default RuxIconPermIdentity;
