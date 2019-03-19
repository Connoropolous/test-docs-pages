initSidebarItems({"constant":[["GIT_HASH",""]],"mod":[["agent",""],["bits_n_pieces",""],["cas","This module contains trait definitions, examples, and test suites for AddressableContent and ContentAddressableStorage."],["chain_header","This module contains definitions of the ChainHeader struct, constructor, and getters. This struct really defines a local source chain, in the sense that it implements the pointers between hashes that a hash chain relies on, which are then used to check the integrity of data using cryptographic hash functions."],["chain_migrate","NOT YET AVAILABLE"],["crud_status","This module holds the relevant constants and an enum required for Holochain to have 'status' metadata for entries. Since Holochain uses an append-only data structure, but still wishes to provide classical features of a data store such as \"update\" and \"remove\" (delete), metadata is created pointing entries forward to their 'latest' version, even including an entry being marked as deleted."],["dna","dna is a library for working with holochain dna files/entries."],["eav",""],["entry","This module contains all the necessary definitions for Entry, which broadly speaking refers to any data which will be written into the ContentAddressableStorage, or the EntityAttributeValueStorage. It defines serialization behaviour for entries. Here you can find the complete list of entry_types, and special entries, like deletion_entry and cap_entry."],["error","This module contains Error type definitions that are used throughout Holochain, and the Ribosome in particular, which is responsible for mounting and running instances of DNA, and executing WASM code."],["hash","The HashString type is defined here. It is used for type safety throughout the codebase to keep track of places where a string is the product of a hash function, and as a base type for Address to use."],["json","The JsonString type is defined here. It is used throughout Holochain to enforce a standardized serialization of data to/from json."],["link","This module contains definitions for what a Link is in Holochain, as well as structs relating to the adding and removing of links between entries and lists of links."],["signature","The Signature type is defined here. They are used in ChainHeaders as a way of providing cryptographically verifiable proof of a given agent as having been the author of a given data entry."],["time","The Iso8601 type is defined here. It is used in particular within ChainHeader to enforce that their timestamps are defined in a useful and consistent way."],["validation","This module defines structs that are used in the interchange of data that is used for validation of chain modifying agent actions between Holochain and Zomes."]]});