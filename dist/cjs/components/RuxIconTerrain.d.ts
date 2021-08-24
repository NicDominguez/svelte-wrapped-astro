import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTerrainProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTerrain["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTerrain["size"];
}
interface RuxIconTerrainEvents {
}
interface RuxIconTerrainSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTerrain extends SvelteComponent {
    $$prop_def: RuxIconTerrainProps;
    $$events_def: RuxIconTerrainEvents;
    $$slot_def: RuxIconTerrainSlots;
    $on<K extends keyof RuxIconTerrainEvents>(type: K, callback: (e: RuxIconTerrainEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTerrainProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTerrainElement | undefined;
}
export default RuxIconTerrain;
