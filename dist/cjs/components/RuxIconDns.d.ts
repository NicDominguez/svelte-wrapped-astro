import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDnsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDns["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDns["size"];
}
interface RuxIconDnsEvents {
}
interface RuxIconDnsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDns extends SvelteComponent {
    $$prop_def: RuxIconDnsProps;
    $$events_def: RuxIconDnsEvents;
    $$slot_def: RuxIconDnsSlots;
    $on<K extends keyof RuxIconDnsEvents>(type: K, callback: (e: RuxIconDnsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDnsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDnsElement | undefined;
}
export default RuxIconDns;
