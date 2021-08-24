import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalDrinkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalDrink["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalDrink["size"];
}
interface RuxIconLocalDrinkEvents {
}
interface RuxIconLocalDrinkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalDrink extends SvelteComponent {
    $$prop_def: RuxIconLocalDrinkProps;
    $$events_def: RuxIconLocalDrinkEvents;
    $$slot_def: RuxIconLocalDrinkSlots;
    $on<K extends keyof RuxIconLocalDrinkEvents>(type: K, callback: (e: RuxIconLocalDrinkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalDrinkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalDrinkElement | undefined;
}
export default RuxIconLocalDrink;
