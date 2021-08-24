import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTransitEnterexitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTransitEnterexit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTransitEnterexit["size"];
}
interface RuxIconTransitEnterexitEvents {
}
interface RuxIconTransitEnterexitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTransitEnterexit extends SvelteComponent {
    $$prop_def: RuxIconTransitEnterexitProps;
    $$events_def: RuxIconTransitEnterexitEvents;
    $$slot_def: RuxIconTransitEnterexitSlots;
    $on<K extends keyof RuxIconTransitEnterexitEvents>(type: K, callback: (e: RuxIconTransitEnterexitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTransitEnterexitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTransitEnterexitElement | undefined;
}
export default RuxIconTransitEnterexit;
