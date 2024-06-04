# Frontend Take-Home Test: Pokémon Feed Implementation

## Overview:

You are tasked with implementing a Pokémon feed using the PokeAPI (https://pokeapi.co/). This project will demonstrate your ability to interact with APIs, transform data, and create a user-friendly interface.

## Objectives:

**API Interaction**:

Fetch data from the PokeAPI.Endpoints:

- List of Pokémon: https://pokeapi.co/api/v2/pokemonIndividual
- Pokémon: https://pokeapi.co/api/v2/pokemon/[pokemon]

**Data Transformation**:

Retrieve both the list of Pokémon and individual Pokémon details.Transform this data into standardized UI data.

**UI Implementation**:

Develop a functional list using the transformed data.Create Pokémon cards displaying the name, image, and basic stats.Use the sprites.back_default attribute from the individual Pokémon endpoint for images.Style and organize the Pokémon cards in a grid or feed view.

**Pagination**:

Implement basic pagination.Choose between page-based pagination and infinite scroll.Page-based pagination is suitable for a grid view.Infinite scroll is more fitting for a feed design.If using page-based pagination, calculate the number of pages from the total number of Pokémon returned by the list API.

**Basic Requirements**:

Discuss and implement a method of pagination.Style and layout considerations for Pokémon cards.
Bonus Objectives:

## Component Design:

Develop a card component for each Pokémon.If using page-based pagination, create a pagination component.

**Handling Edge Cases**:

Address scenarios like server errors (500 error) or failed API calls for individual Pokémon.
Advanced Features:

Discuss and possibly implement sorting, filtering, and search functionalities.Explore potential API design modifications to accommodate these features using the existing PokeAPI.

**Clarifications**:

Pagination: Decide on using either page-based pagination or infinite scroll.List Sorting/Filtering/Search: This can be considered in later stages.Pokémon Card Details: Focus on a basic card layout showing name, image, and a few key stats.
