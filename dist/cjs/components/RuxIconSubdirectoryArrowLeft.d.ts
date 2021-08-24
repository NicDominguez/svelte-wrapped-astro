import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSubdirectoryArrowLeftProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSubdirectoryArrowLeft["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSubdirectoryArrowLeft["size"];
}
interface RuxIconSubdirectoryArrowLeftEvents {
}
interface RuxIconSubdirectoryArrowLeftSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSubdirectoryArrowLeft extends SvelteComponent {
    $$prop_def: RuxIconSubdirectoryArrowLeftProps;
    $$events_def: RuxIconSubdirectoryArrowLeftEvents;
    $$slot_def: RuxIconSubdirectoryArrowLeftSlots;
    $on<K extends keyof RuxIconSubdirectoryArrowLeftEvents>(type: K, callback: (e: RuxIconSubdirectoryArrowLeftEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSubdirectoryArrowLeftProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSubdirectoryArrowLeftElement | undefined;
}
export default RuxIconSubdirectoryArrowLeft;
