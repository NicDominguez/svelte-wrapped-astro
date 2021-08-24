import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTheatersProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTheaters["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTheaters["size"];
}
interface RuxIconTheatersEvents {
}
interface RuxIconTheatersSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTheaters extends SvelteComponent {
    $$prop_def: RuxIconTheatersProps;
    $$events_def: RuxIconTheatersEvents;
    $$slot_def: RuxIconTheatersSlots;
    $on<K extends keyof RuxIconTheatersEvents>(type: K, callback: (e: RuxIconTheatersEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTheatersProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTheatersElement | undefined;
}
export default RuxIconTheaters;
