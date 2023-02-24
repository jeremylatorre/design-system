export enum OdsIconSize {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export type OdsIconSizeUnion = `${OdsIconSize}`;

export const OdsIconSizeList = Object.keys(OdsIconSize)
  .map((key) => OdsIconSize[key as OdsIconSizeUnion]);

export enum OdsIconName {
   ADD = 'add',
   ARROW_DOWN_RIGHT = 'arrow-down-right',
   ARROW_DOWN = 'arrow-down',
   ARROW_LEFT = 'arrow-left',
   ARROW_RIGHT = 'arrow-right',
   ARROW_TRANSFER = 'arrow-transfer',
   ARROW_UP_RIGHT = 'arrow-up-right',
   ARROW_UP = 'arrow-up',
   BELL = 'bell',
   BIN = 'bin',
   BOOK = 'book',
   CALENDAR = 'calendar',
   CART = 'cart',
   CHAT = 'chat',
   CHECK = 'check',
   CHEVRON_DOWN = 'chevron-down',
   CHEVRON_LEFT = 'chevron-left',
   CHEVRON_RIGHT = 'chevron-right',
   CHEVRON_UP_DOWN = 'chevron-up-down',
   CHEVRON_UP = 'chevron-up',
   CLOCK_WAIT = 'clock-wait',
   CLOSE = 'close',
   COPY = 'copy',
   ELLIPSIS_VERTICAL = 'ellipsis-vertical',
   ELLIPSIS = 'ellipsis',
   EMAIL = 'email',
   EQUAL = 'equal',
   ERROR_CIRCLE = 'error-circle',
   ERROR = 'error',
   EXTERNAL_LINK = 'external-link',
   EYE_CLOSED = 'eye-closed',
   EYE_OPEN = 'eye-open',
   FILE = 'file',
   FILTER = 'filter',
   FOLDER = 'folder',
   GEAR = 'gear',
   GUIDES = 'guides',
   HAMBURGER = 'hamburger',
   HELP_CIRCLE = 'help-circle',
   HELP = 'help',
   HOME = 'home',
   INDETERMINATE = 'indeterminate',
   INFO_CIRCLE = 'info-circle',
   INFO = 'info',
   LIGHTBULB = 'lightbulb',
   LIST = 'list',
   LOCATION = 'location',
   LOCK = 'lock',
   MINUS = 'minus',
   OK = 'ok',
   OVH = 'ovh',
   PEN = 'pen',
   PHONE = 'phone',
   PLUS = 'plus',
   PRINTER = 'printer',
   REFRESH = 'refresh',
   REMOVE = 'remove',
   SEARCH = 'search',
   SETTINGS = 'settings',
   SHAPE_CIRCLE = 'shape-circle',
   SHAPE_DOT = 'shape-dot',
   SORT_DOWN = 'sort-down',
   SORT_UP = 'sort-up',
   SORT = 'sort',
   SUCCESS_CIRCLE = 'success-circle',
   SUCCESS = 'success',
   TIME = 'time',
   TRANSFER = 'transfer',
   TRASH = 'trash',
   TRIANGLE_DOWN = 'triangle-down',
   TRIANGLE_LEFT = 'triangle-left',
   TRIANGLE_RIGHT = 'triangle-right',
   TRIANGLE_UP = 'triangle-up',
   TRUCK = 'truck',
   USER = 'user',
   WARNING_CIRCLE = 'warning-circle',
   WARNING = 'warning',
   ANTI_DDOS_PROTECTION_CONCEPT = 'anti-ddos-protection-concept',
   APP_GEAR_CONCEPT = 'app-gear-concept',
   APP_REPLICATION_CONCEPT = 'app-replication-concept',
   APP_SCRIPT_CONCEPT = 'app-script-concept',
   APP_WORLD_CONCEPT = 'app-world-concept',
   APPLICATION_CONCEPT = 'application-concept',
   ARROW_CROSSED_CONCEPT = 'arrow-crossed-concept',
   ARROW_DOWN_CONCEPT = 'arrow-down-concept',
   ARROW_LEFT_CONCEPT = 'arrow-left-concept',
   ARROW_RIGHT_CONCEPT = 'arrow-right-concept',
   ARROW_UNDO_CONCEPT = 'arrow-undo-concept',
   BALANCE_CONCEPT = 'balance-concept',
   BANDWIDTH_CONCEPT = 'bandwidth-concept',
   BELL_CONCEPT = 'bell-concept',
   BIRD_CONCEPT = 'bird-concept',
   BOOK_CLOSE_CONCEPT = 'book-close-concept',
   BOOK_CONTACT_CONCEPT = 'book-contact-concept',
   BOOK_OPEN_CONCEPT = 'book-open-concept',
   BROOM_CONCEPT = 'broom-concept',
   BRUSH_CONCEPT = 'brush-concept',
   CABLE_SPEED_CONCEPT = 'cable-speed-concept',
   CALENDAR_PAY_AS_YOU_GO_CONCEPT = 'calendar-pay-as-you-go-concept',
   CALENDAR_CONCEPT = 'calendar-concept',
   CAMERA_CONCEPT = 'camera-concept',
   CART_CONCEPT = 'cart-concept',
   CDN_CONCEPT = 'cdn-concept',
   CHATBOT_CONCEPT = 'chatbot-concept',
   CHRONO_CONCEPT = 'chrono-concept',
   CLOCK_AVAILABLE_CONCEPT = 'clock-available-concept',
   CLOCK_CONCEPT = 'clock-concept',
   CLOUD_DATA_SHARING_CONCEPT = 'cloud-data-sharing-concept',
   CLOUD_EDGE_COMPUTING_CONCEPT = 'cloud-edge-computing-concept',
   CLOUD_ESSENTIAL_CONCEPT = 'cloud-essential-concept',
   CLOUD_EYE_CONCEPT = 'cloud-eye-concept',
   CLOUD_HAND_CONCEPT = 'cloud-hand-concept',
   CLOUD_HYBRID_CONCEPT = 'cloud-hybrid-concept',
   CLOUD_INFINITY_CONCEPT = 'cloud-infinity-concept',
   CLOUD_PADLOCK_CONCEPT = 'cloud-padlock-concept',
   CLOUD_SERVER_CONCEPT = 'cloud-server-concept',
   CLOUD_CONCEPT = 'cloud-concept',
   COMMUNITY_CONCEPT = 'community-concept',
   COMPONENT_SQUARE_CONCEPT = 'component-square-concept',
   COMPONENT_CONCEPT = 'component-concept',
   COMPUTE_CONCEPT = 'compute-concept',
   COMPUTER_CURVE_CONCEPT = 'computer-curve-concept',
   COMPUTER_FLOPPY_CONCEPT = 'computer-floppy-concept',
   COMPUTER_FOLDER_CONCEPT = 'computer-folder-concept',
   COMPUTER_LAPTOP_CLOUD_CONCEPT = 'computer-laptop-cloud-concept',
   COMPUTER_LAPTOP_CONCEPT = 'computer-laptop-concept',
   COMPUTER_V_R_OPS_CONCEPT = 'computer-v-r-ops-concept',
   COMPUTER_CONCEPT = 'computer-concept',
   CONTAINER_CONCEPT = 'container-concept',
   COUNTER_CONCEPT = 'counter-concept',
   CREDIT_CARD_CLOCK_CONCEPT = 'credit-card-clock-concept',
   CREDIT_CARD_CONCEPT = 'credit-card-concept',
   CURVE_CONCEPT = 'curve-concept',
   DATABASE_COLD_ARCHIVE_CONCEPT = 'database-cold-archive-concept',
   DATABASE_SQL_CONCEPT = 'database-sql-concept',
   DATABASE_CONCEPT = 'database-concept',
   DATACENTER_CONCEPT = 'datacenter-concept',
   DEVICE_MOBILE_CONCEPT = 'device-mobile-concept',
   DEVICE_TABLET_CONCEPT = 'device-tablet-concept',
   DIAMOND_CONCEPT = 'diamond-concept',
   DIFFERENT_CONCEPT = 'different-concept',
   DNS_ANYCAST_CONCEPT = 'dns-anycast-concept',
   DOMAINS_CONCEPT = 'domains-concept',
   DOWNLOAD_CONCEPT = 'download-concept',
   DSLAM_CONCEPT = 'dslam-concept',
   ENVELOP_LETTER_CONCEPT = 'envelop-letter-concept',
   ENVELOP_CONCEPT = 'envelop-concept',
   ETHERNET_ADD_CONCEPT = 'ethernet-add-concept',
   ETHERNET_CONCEPT = 'ethernet-concept',
   EXPANSION_ARROWS_CONCEPT = 'expansion-arrows-concept',
   EXPORT_CONCEPT = 'export-concept',
   EYE_CONCEPT = 'eye-concept',
   FLASK_CONCEPT = 'flask-concept',
   FLOPPY_CLOCK_CONCEPT = 'floppy-clock-concept',
   FLOPPY_RELOAD_CONCEPT = 'floppy-reload-concept',
   FLOPPY_CONCEPT = 'floppy-concept',
   FOLDER_FTP_CONCEPT = 'folder-ftp-concept',
   FOLDER_CONCEPT = 'folder-concept',
   GEAR_ARROW_CONCEPT = 'gear-arrow-concept',
   GEAR_DOLLAR_CONCEPT = 'gear-dollar-concept',
   GEAR_CONCEPT = 'gear-concept',
   GEOLOCALISATION_OVHCLOUD_CONCEPT = 'geolocalisation-ovhcloud-concept',
   GEOLOCALISATION_PLAN_CONCEPT = 'geolocalisation-plan-concept',
   GIFT_CONCEPT = 'gift-concept',
   GRAPH_CONCEPT = 'graph-concept',
   HAND_LEAF_CONCEPT = 'hand-leaf-concept',
   HAND_WORLD_CONCEPT = 'hand-world-concept',
   HANDSHAKE_CONCEPT = 'handshake-concept',
   HARDWARE_GPU_CONCEPT = 'hardware-gpu-concept',
   HARDWARE_SATA_CONCEPT = 'hardware-sata-concept',
   HARDWARE_SSD_CONCEPT = 'hardware-ssd-concept',
   HASHTAG_CONCEPT = 'hashtag-concept',
   HOURGLASS_CONCEPT = 'hourglass-concept',
   HOUSE_CONCEPT = 'house-concept',
   IMPORT_CONCEPT = 'import-concept',
   INFINITE_CONCEPT = 'infinite-concept',
   INFO_CONCEPT = 'info-concept',
   INVADER_CONCEPT = 'invader-concept',
   IO_T_CONCEPT = 'io-t-concept',
   KEY_CONCEPT = 'key-concept',
   KEYPAD_CONCEPT = 'keypad-concept',
   LEAF_CONCEPT = 'leaf-concept',
   LIFEBUOY_CONCEPT = 'lifebuoy-concept',
   LIGHTBULB_CONCEPT = 'lightbulb-concept',
   LINE_COMMUNICATING_CONCEPT = 'line-communicating-concept',
   LINES_SYMMETRICAL_CONCEPT = 'lines-symmetrical-concept',
   MAGNIFYING_GLASS_CHECK_CONCEPT = 'magnifying-glass-check-concept',
   MAGNIFYING_GLASS_PERSON_CONCEPT = 'magnifying-glass-person-concept',
   MAGNIFYING_GLASS_CONCEPT = 'magnifying-glass-concept',
   MAP_FRANCE_CONCEPT = 'map-france-concept',
   MEASURE_CONCEPT = 'measure-concept',
   MEDAL_CONCEPT = 'medal-concept',
   MICROPHONE_CONCEPT = 'microphone-concept',
   MODEM_CONCEPT = 'modem-concept',
   MULTI_DEVICE_CONCEPT = 'multi-device-concept',
   NETWORK_CONCEPT = 'network-concept',
   NEWTAB_CONCEPT = 'newtab-concept',
   NRA_CONCEPT = 'nra-concept',
   OPENSTACK_CONCEPT = 'openstack-concept',
   OVER_THE_BOX_CONCEPT = 'over-the-box-concept',
   PADLOCK_CLOSED_CONCEPT = 'padlock-closed-concept',
   PADLOCK_OPENED_CONCEPT = 'padlock-opened-concept',
   PADLOCK_TRANSIT_CONCEPT = 'padlock-transit-concept',
   PAGE_CERTIFICATE_CONCEPT = 'page-certificate-concept',
   PAGE_INFO_CONCEPT = 'page-info-concept',
   PAGE_QUESTION_CONCEPT = 'page-question-concept',
   PAGE_SCRIPT_CONCEPT = 'page-script-concept',
   PAGE_CONCEPT = 'page-concept',
   PAPERPLANE_CONCEPT = 'paperplane-concept',
   PARTNER_PLATFORMSH_CONCEPT = 'partner-platformsh-concept',
   PAUSE_CONCEPT = 'pause-concept',
   PEN_CONCEPT = 'pen-concept',
   PERSON_HAPPY_CONCEPT = 'person-happy-concept',
   PERSON_CONCEPT = 'person-concept',
   PHONE_DOTS_CONCEPT = 'phone-dots-concept',
   PHONE_FILTER_CONCEPT = 'phone-filter-concept',
   PHONE_FOBIDDEN_CONCEPT = 'phone-fobidden-concept',
   PHONE_FORWARD_CONCEPT = 'phone-forward-concept',
   PHONE_CONCEPT = 'phone-concept',
   PROMOTION = 'promotion',
   PIG_CONCEPT = 'pig-concept',
   PLAY_CONCEPT = 'play-concept',
   PLUG_N_PLAY_CONCEPT = 'plug-n-play-concept',
   POWER_CONCEPT = 'power-concept',
   PRINTER_CONCEPT = 'printer-concept',
   PUZZLE_CONCEPT = 'puzzle-concept',
   RAM_CONCEPT = 'ram-concept',
   RECEIPT_CONCEPT = 'receipt-concept',
   RELOAD_CONCEPT = 'reload-concept',
   REPLICATION_CONCEPT = 'replication-concept',
   RSS_CONCEPT = 'rss-concept',
   SCALE_UP_CONCEPT = 'scale-up-concept',
   SERVER_GEAR_CONCEPT = 'server-gear-concept',
   SERVER_MANAGED_CONCEPT = 'server-managed-concept',
   SERVER_CONCEPT = 'server-concept',
   SHARE_CONCEPT = 'share-concept',
   SHIELD_CONCEPT = 'shield-concept',
   SMILEY_HAPPY_CONCEPT = 'smiley-happy-concept',
   SMILEY_SAD_CONCEPT = 'smiley-sad-concept',
   SMS_CONCEPT = 'sms-concept',
   SOFTWARE_CONCEPT = 'software-concept',
   SPANNER_CONCEPT = 'spanner-concept',
   SPEAKER_OFF_CONCEPT = 'speaker-off-concept',
   SPEAKER_ON_CONCEPT = 'speaker-on-concept',
   SPEECH_BUBBLE_CONCEPT = 'speech-bubble-concept',
   STAR_CONCEPT = 'star-concept',
   STOP_CONCEPT = 'stop-concept',
   SUB_REPARTITOR_CONCEPT = 'sub-repartitor-concept',
   TAPE_CONCEPT = 'tape-concept',
   THUMB_UP_CONCEPT = 'thumb-up-concept',
   TODO_LIST_CONCEPT = 'todo-list-concept',
   TRAFFIC_CONE_CONCEPT = 'traffic-cone-concept',
   TRANSFER_CONCEPT = 'transfer-concept',
   TRASH_CONCEPT = 'trash-concept',
   TRUCK_CONCEPT = 'truck-concept',
   TYPING_CONCEPT = 'typing-concept',
   UPLOAD_CONCEPT = 'upload-concept',
   USER_FORBID_CONCEPT = 'user-forbid-concept',
   USER_SUPPORT_CONCEPT = 'user-support-concept',
   USER_CONCEPT = 'user-concept',
   VIRTUAL_MACHINE_CONCEPT = 'virtual-machine-concept',
   WALLET_CONCEPT = 'wallet-concept',
   WARNING_CONCEPT = 'warning-concept',
   WIFI_CONCEPT = 'wifi-concept',
   WORLD_ADD_CONCEPT = 'world-add-concept',
   WORLD_CONCEPT = 'world-concept'
}

export type OdsIconNameUnion = `${OdsIconName}`;

export const OdsIconNameList = Object.values(OdsIconName);
