import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGridOnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGridOn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGridOn["size"];
}
interface RuxIconGridOnEvents {
}
interface RuxIconGridOnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGridOn extends SvelteComponent {
    $$prop_def: RuxIconGridOnProps;
    $$events_def: RuxIconGridOnEvents;
    $$slot_def: RuxIconGridOnSlots;
    $on<K extends keyof RuxIconGridOnEvents>(type: K, callback: (e: RuxIconGridOnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGridOnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGridOnElement | undefined;
}
export default RuxIconGridOn;
