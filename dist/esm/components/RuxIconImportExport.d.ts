import { Components } from '@astrouxds/astro-web-components';
interface RuxIconImportExportProps {
    /** The fill color for the icon */
    color?: Components.RuxIconImportExport["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconImportExport["size"];
}
interface RuxIconImportExportEvents {
}
interface RuxIconImportExportSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconImportExport extends SvelteComponent {
    $$prop_def: RuxIconImportExportProps;
    $$events_def: RuxIconImportExportEvents;
    $$slot_def: RuxIconImportExportSlots;
    $on<K extends keyof RuxIconImportExportEvents>(type: K, callback: (e: RuxIconImportExportEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconImportExportProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconImportExportElement | undefined;
}
export default RuxIconImportExport;
