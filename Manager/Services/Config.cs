﻿using Core;
using Core.Models;
using Manager.Properties;
using Services.Concrete.Movie;
using Services.Models;

namespace Manager.Services
{
    public static class Config
    {
        public static GameLauncherConfiguration BuildGameLauncherConfiguration(Demo demo)
        {
            var csgoExePath = Settings.Default.CsgoExePath;
            if (csgoExePath == "")
            {
                csgoExePath = AppSettings.GetCsgoExePath();
            }

            return new GameLauncherConfiguration(demo)
            {
                Width = Settings.Default.ResolutionWidth,
                Height = Settings.Default.ResolutionHeight,
                Fullscreen = Settings.Default.IsFullscreen,
                EnableHlae = Settings.Default.EnableHlae,
                CsgoExePath = csgoExePath,
                EnableHlaeConfigParent = Settings.Default.EnableHlaeConfigParent,
                HlaeConfigParentFolderPath = Settings.Default.HlaeConfigParentFolderPath,
                HlaeExePath = HlaeService.GetHlaeExePath(),
                LaunchParameters = Settings.Default.LaunchParameters,
                UseCustomActionsGeneration = Settings.Default.UseCustomActionsGeneration,
            };
        }
    }
}
