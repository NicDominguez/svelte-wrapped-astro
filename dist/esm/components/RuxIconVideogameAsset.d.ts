import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVideogameAssetProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVideogameAsset["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVideogameAsset["size"];
}
interface RuxIconVideogameAssetEvents {
}
interface RuxIconVideogameAssetSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVideogameAsset extends SvelteComponent {
    $$prop_def: RuxIconVideogameAssetProps;
    $$events_def: RuxIconVideogameAssetEvents;
    $$slot_def: RuxIconVideogameAssetSlots;
    $on<K extends keyof RuxIconVideogameAssetEvents>(type: K, callback: (e: RuxIconVideogameAssetEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVideogameAssetProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVideogameAssetElement | undefined;
}
export default RuxIconVideogameAsset;
