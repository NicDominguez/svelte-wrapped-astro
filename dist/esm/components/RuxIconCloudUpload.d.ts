import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCloudUploadProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCloudUpload["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCloudUpload["size"];
}
interface RuxIconCloudUploadEvents {
}
interface RuxIconCloudUploadSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCloudUpload extends SvelteComponent {
    $$prop_def: RuxIconCloudUploadProps;
    $$events_def: RuxIconCloudUploadEvents;
    $$slot_def: RuxIconCloudUploadSlots;
    $on<K extends keyof RuxIconCloudUploadEvents>(type: K, callback: (e: RuxIconCloudUploadEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCloudUploadProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCloudUploadElement | undefined;
}
export default RuxIconCloudUpload;
