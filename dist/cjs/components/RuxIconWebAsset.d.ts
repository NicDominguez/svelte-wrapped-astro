import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWebAssetProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWebAsset["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWebAsset["size"];
}
interface RuxIconWebAssetEvents {
}
interface RuxIconWebAssetSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWebAsset extends SvelteComponent {
    $$prop_def: RuxIconWebAssetProps;
    $$events_def: RuxIconWebAssetEvents;
    $$slot_def: RuxIconWebAssetSlots;
    $on<K extends keyof RuxIconWebAssetEvents>(type: K, callback: (e: RuxIconWebAssetEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWebAssetProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWebAssetElement | undefined;
}
export default RuxIconWebAsset;
