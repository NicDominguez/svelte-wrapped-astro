import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalSeeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalSee["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalSee["size"];
}
interface RuxIconLocalSeeEvents {
}
interface RuxIconLocalSeeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalSee extends SvelteComponent {
    $$prop_def: RuxIconLocalSeeProps;
    $$events_def: RuxIconLocalSeeEvents;
    $$slot_def: RuxIconLocalSeeSlots;
    $on<K extends keyof RuxIconLocalSeeEvents>(type: K, callback: (e: RuxIconLocalSeeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalSeeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalSeeElement | undefined;
}
export default RuxIconLocalSee;
