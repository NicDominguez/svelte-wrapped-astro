import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFontDownloadProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFontDownload["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFontDownload["size"];
}
interface RuxIconFontDownloadEvents {
}
interface RuxIconFontDownloadSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFontDownload extends SvelteComponent {
    $$prop_def: RuxIconFontDownloadProps;
    $$events_def: RuxIconFontDownloadEvents;
    $$slot_def: RuxIconFontDownloadSlots;
    $on<K extends keyof RuxIconFontDownloadEvents>(type: K, callback: (e: RuxIconFontDownloadEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFontDownloadProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFontDownloadElement | undefined;
}
export default RuxIconFontDownload;
