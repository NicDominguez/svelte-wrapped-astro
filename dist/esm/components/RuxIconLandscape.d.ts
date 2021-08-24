import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLandscapeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLandscape["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLandscape["size"];
}
interface RuxIconLandscapeEvents {
}
interface RuxIconLandscapeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLandscape extends SvelteComponent {
    $$prop_def: RuxIconLandscapeProps;
    $$events_def: RuxIconLandscapeEvents;
    $$slot_def: RuxIconLandscapeSlots;
    $on<K extends keyof RuxIconLandscapeEvents>(type: K, callback: (e: RuxIconLandscapeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLandscapeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLandscapeElement | undefined;
}
export default RuxIconLandscape;
