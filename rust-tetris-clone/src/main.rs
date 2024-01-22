use std::process::exit;

use bevy::{app::AppExit, prelude::*}; // Import AppExit for exiting the app

// Constants for game grid and dimensions
const CELL_SIZE: f32 = 40.0; // Size of each cell in the game grid
const COLUMNS: u32 = 10; // Number of columns in the game grid
const GAME_HEIGHT: f32 = ROWS as f32 * CELL_SIZE; //Total game height
const GAME_TITLE: &str = "Tetris"; // Title of the game
const GAME_WIDTH: f32 = COLUMNS as f32 * CELL_SIZE; // Total game width
const ROWS: u32 = 20; // Number of rows in the game grid

// Constants for window dimensions and layout
const PADDING: f32 = 20.0; // Padding between the game grid and the sidebar
const PREVIEW_HEIGHT_FRACTION: f32 = 0.7; // Fraction of the sidebar height for the preview
const SCORE_HEIGHT_FRACTION: f32 = 1.0 - PREVIEW_HEIGHT_FRACTION; // Fraction of the sidebar height for the score
const SIDEBAR_WIDTH: f32 = 200.0; // Width of the sidebar
const WINDOW_HEIGHT: f32 = GAME_HEIGHT + PADDING * 2.0; // Total window height
const WINDOW_WIDTH: f32 = GAME_WIDTH + SIDEBAR_WIDTH + PADDING * 3.0; // Total window width

// Constants for game behavior
const MOVE_WAIT_TIME: f32 = 200.0;
const ROTATE_WAIT_TIME: f32 = 200.0;
const UPDATE_START_SPEED: f32 = 800.0;

// Component representing an offset for a block in the game
#[derive(Debug, Clone, Copy)]
struct BlockOffset(i32, i32);

// Component defining various colors used in the game
struct Colors {
    blue: Color,
    cyan: Color,
    gray: Color,
    green: Color,
    orange: Color,
    purple: Color,
    red: Color,
    yellow: Color,
    line_color: Color,
}

// Component defining the shapes of different tetrominos in the game
struct Tetrominos {
    i_shape: Vec<(i32, i32)>,
    j_shape: Vec<(i32, i32)>,
    l_shape: Vec<(i32, i32)>,
    o_shape: Vec<(i32, i32)>,
    s_shape: Vec<(i32, i32)>,
    t_shape: Vec<(i32, i32)>,
    z_shape: Vec<(i32, i32)>,
}

// Component defining scores associated with different levels in the game
struct ScoreData {
    level_1: u32,
    level_2: u32,
    level_3: u32,
    level_4: u32,
}

impl Default for Colors {
    fn default() -> Self {
        // Default colors used in the game
        Colors {
            blue: Color::rgb(0.0, 0.0, 1.0),
            cyan: Color::rgb(0.0, 1.0, 1.0),
            gray: Color::rgb(0.5, 0.5, 0.5), // Gray color
            green: Color::rgb(0.0, 128.0 / 255.0, 0.0),
            orange: Color::rgb(1.0, 165.0 / 255.0, 0.0),
            purple: Color::rgb(128.0 / 255.0, 0.0, 128.0 / 255.0),
            red: Color::rgb(229.0 / 255.0, 27.0 / 255.0, 32.0 / 255.0),
            yellow: Color::rgb(1.0, 1.0, 0.0),
            line_color: Color::rgb(1.0, 1.0, 1.0), // White
        }
    }
}

impl Default for Tetrominos {
    fn default() -> Self {
        // Default shapes of different tetrominos in the game
        Tetrominos {
            i_shape: vec![(0, 0), (0, -1), (0, -2), (0, 1)],
            j_shape: vec![(0, 0), (0, -1), (0, 1), (-1, 1)],
            l_shape: vec![(0, 0), (0, -1), (0, 1), (1, 1)],
            o_shape: vec![(0, 0), (0, -1), (1, 0), (1, -1)],
            s_shape: vec![(0, 0), (-1, 0), (0, -1), (1, -1)],
            t_shape: vec![(0, 0), (-1, 0), (1, 0), (0, -1)],
            z_shape: vec![(0, 0), (1, 0), (0, -1), (-1, -1)],
        }
    }
}

impl Default for ScoreData {
    fn default() -> Self {
        // Default scores associated with different levels in the game
        ScoreData {
            level_1: 40,
            level_2: 100,
            level_3: 300,
            level_4: 1200,
        }
    }
}

// This system will run once when the game starts and when you press ESC to exit the game
fn keyboard_input_system(
    keyboard_input: Res<Input<KeyCode>>,
    mut app_exit_event_writer: EventWriter<AppExit>,
) {
    if keyboard_input.pressed(KeyCode::Escape) {
        info!("'ESC' currently pressed");
        app_exit_event_writer.send(AppExit); // Send an AppExit event
    }

    // if keyboard_input.just_pressed(KeyCode::A) {
    //     info!("'A' just pressed");
    // }

    // if keyboard_input.just_released(KeyCode::A) {
    //     info!("'A' just released");
    // }
}

fn main() {
    App::new()
        .add_plugins((DefaultPlugins.set(WindowPlugin {
            primary_window: Some(Window {
                title: GAME_TITLE.into(),
                resolution: (WINDOW_WIDTH, WINDOW_HEIGHT).into(), // Set window dimensions (game + sidebar)
                position: WindowPosition::Automatic, // Let the OS handle window position
                resizable: true,                     // Allow the window to be resized
                ..default()
            }),
            ..default()
        }),))
        .add_systems(Update, keyboard_input_system)
        .run();
}
