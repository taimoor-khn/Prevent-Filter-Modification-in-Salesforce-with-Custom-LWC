# Prevent-Filter-Modification-in-Salesforce-with-Custom-LWC
A Lightning Web Component (LWC) solution to hide the close button on filters in Salesforce List Views. This customization prevents users from accidentally removing filters and ensures a cleaner, more controlled user experience in Salesforce.
# Salesforce Filter Close Button Hider (LWC)

## Overview
This repository contains a **Lightning Web Component (LWC)** designed to **hide the close button (X)** on filters in Salesforce List Views. This solution helps prevent users from accidentally removing or modifying filters in the UI, offering a more controlled and streamlined user experience.

## Problem
Salesforce allows users to close filters by clicking the close button on filter pills in List Views. In some cases, you may want to restrict this functionality to ensure that certain filters remain intact for non-technical users, avoiding accidental changes or deletions.

## Solution
This LWC component:
- Detects the current Salesforce List View page.
- Injects custom CSS to hide the close button (`X`) on the filter pills.
- Works on specific list views, preventing the close button from being visible only on those pages.

## Features
- **Targeted Customization**: Hide the close button only on specified list views.
- **Non-Invasive**: The solution uses custom CSS injection, ensuring no impact on Salesforce's core functionality.
- **Easy Implementation**: Simply deploy the component to your Salesforce org, and it takes care of the rest.

## How It Works
1. **URL Detection**: The component checks the current URL to determine if it matches the target Salesforce List View (e.g., an Account List View with the `NewLastWeek` filter).
2. **CSS Injection**: If the URL matches, the component dynamically injects CSS to hide the close button (`X`) from the filter pills.
3. The solution only affects the specified pages or filters, ensuring that other views are unaffected.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/taimoor-khn/Prevent-Filter-Modification-in-Salesforce-with-Custom-LWC.git
