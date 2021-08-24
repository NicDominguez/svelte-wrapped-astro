import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxMenuItemProps {
    /** Disables the item */
    disabled?: Components.RuxMenuItem["disabled"];
    /** Value returned when item is selected. If no value is given, the text content will be used. */
    value?: Components.RuxMenuItem["value"];
    /** Contains a URL or a URL fragment that the hyperlink points to.
  If this property is set, an anchor tag will be rendered. */
    href?: Components.RuxMenuItem["href"];
    /** Specifies where to display the linked URL.
  Only applies when an `href` is provided.
  Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. */
    target?: Components.RuxMenuItem["target"];
    /** Specifies the relationship of the target object to the link object.
  The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). */
    rel?: Components.RuxMenuItem["rel"];
    /** This attribute instructs browsers to download a URL instead of navigating to
  it, so the user will be prompted to save it as a local file. If the attribute
  has a value, it is used as the pre-filled file name in the Save prompt
  (the user can still change the file name if they want). */
    download?: Components.RuxMenuItem["download"];
}
interface RuxMenuItemEvents {
    /** Emitted when item is clicked. Ex `{value : 10}` */
    "rux-menu-item-selected": Parameters<JSX.RuxMenuItem["onRux-menu-item-selected"]>[0];
}
interface RuxMenuItemSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxMenuItem extends SvelteComponent {
    $$prop_def: RuxMenuItemProps;
    $$events_def: RuxMenuItemEvents;
    $$slot_def: RuxMenuItemSlots;
    $on<K extends keyof RuxMenuItemEvents>(type: K, callback: (e: RuxMenuItemEvents[K]) => any): () => void;
    $set($$props: Partial<RuxMenuItemProps>): void;
    constructor(options: any);
    get disabled(): any;
    set disabled(disabled: any);
    get value(): any;
    set value(value: any);
    get href(): any;
    set href(href: any);
    get target(): any;
    set target(target: any);
    get rel(): any;
    set rel(rel: any);
    get download(): any;
    set download(download: any);
    get getWebComponent(): HTMLRuxMenuItemElement | undefined;
}
export default RuxMenuItem;
