import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCloudDownloadProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCloudDownload["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCloudDownload["size"];
}
interface RuxIconCloudDownloadEvents {
}
interface RuxIconCloudDownloadSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCloudDownload extends SvelteComponent {
    $$prop_def: RuxIconCloudDownloadProps;
    $$events_def: RuxIconCloudDownloadEvents;
    $$slot_def: RuxIconCloudDownloadSlots;
    $on<K extends keyof RuxIconCloudDownloadEvents>(type: K, callback: (e: RuxIconCloudDownloadEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCloudDownloadProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCloudDownloadElement | undefined;
}
export default RuxIconCloudDownload;
